export const load = async ({ fetch }) => {};

import type { Actions } from './$types';
import characters from '$lib/characters.json';
import relicStats from '$lib/relic_stats.json';
import TextMap from '$lib/TextMapEN.json';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const uid = form.get('uid');
		const res = await fetch(`https://enka.network/api/hsr/uid/${uid}`, {
			headers: {
				'User-Agent': 'metalcupcake5/1.0'
			}
		});
		const data = await res.json();

		const charList = [];

		for (const c of data.detailInfo.avatarDetailList) {
			const char = {
				name: characters[c.avatarId],
				id: c.avatarId,
				level: c.level,
				maxLevel: 20 + c.promotion * 10,
				startEnergy: 0,
				eidolon: c.rank ?? 0,
				traces: c.skillTreeList
					.filter((s) => s.pointId.toString()[4] != 0)
					.map((s) => (s.pointId % 1000).toString()),
				relics: [],
				abilities: {
					attack: c.skillTreeList.find((s) => s.pointId % 1000 == 1)?.level ?? 1,
					skill: c.skillTreeList.find((s) => s.pointId % 1000 == 2)?.level ?? 1,
					ult: c.skillTreeList.find((s) => s.pointId % 1000 == 3)?.level ?? 1,
					talent: c.skillTreeList.find((s) => s.pointId % 1000 == 4)?.level ?? 1
				},
				light_cone: {
					name: TextMap[c.equipment._flat.name].toLowerCase().split(' ').join('_'),
					level: c.equipment.level,
					maxLevel: 20 + c.equipment.promotion * 10,
					superimposition: c.equipment.rank
				}
			};
			for (const r of c.relicList) {
				const stats = r._flat.props;
				const relic = {
					name: TextMap[r._flat.setName].toLowerCase().split(' ').join('_'),
					main_stat: {
						stat: relicStats[stats[0].type] ?? stats[0].type,
						amount: stats[0].value
					},
					sub_stats: []
				};
				stats.shift();
				relic.sub_stats = stats.map((e) => {
					return {
						stat: relicStats[e.type] ?? e.type,
						amount: e.value
					};
				});
				char.relics.push(relic);
			}
			// console.log(char);
			charList.push(char);
		}

		return { charList };
	}
} satisfies Actions;
