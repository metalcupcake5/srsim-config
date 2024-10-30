export const load = async ({ fetch }) => {};

import type { Actions } from './$types';

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
				name: c.avatarId,
				level: c.level,
				maxLevel: 20 + c.promotion * 10,
				startEnergy: 0,
				eidolon: c.rank ?? 0,
				// traces: [
				// 	'101',
				// 	'102',
				// 	'103',
				// 	'201',
				// 	'202',
				// 	'203',
				// 	'204',
				// 	'205',
				// 	'206',
				// 	'207',
				// 	'208',
				// 	'209',
				// 	'210'
				// ],
				relics: [],
				abilities: {
					attack: c.skillTreeList.find((s) => s.pointId % 1000 == 1)?.level ?? 1,
					skill: c.skillTreeList.find((s) => s.pointId % 1000 == 2)?.level ?? 1,
					ult: c.skillTreeList.find((s) => s.pointId % 1000 == 3)?.level ?? 1,
					talent: c.skillTreeList.find((s) => s.pointId % 1000 == 4)?.level ?? 1
				},
				lightCone: {
					name: 'light_cone',
					level: c.equipment.level,
					maxLevel: 20 + c.equipment.promotion * 10,
					superimposition: c.equipment.rank
				}
			};
			for (const r of c.relicList) {
				const stats = r._flat.props;
				const relic = {
					name: 'relic',
					main_stat: {
						stat: stats[0].type,
						amount: stats[0].amount
					},
					sub_stats: []
				};
				stats.shift();
				relic.sub_stats = stats.map((e) => {
					return {
						stat: e.type,
						amount: e.value
					};
				});
				char.relics.push(relic);
			}
			// console.log(char);
			charList.push(char);
			// {
			//     "key": "musketeer_of_wild_wheat",
			//     "main_stat": {
			//         "stat": "HP_FLAT",
			//         "amount": 374
			//     },
			//     "sub_stats": [
			//         {
			//             "stat": "ATK_FLAT",
			//             "amount": 16
			//         },
			//         {
			//             "stat": "ATK_PERCENT",
			//             "amount": 0.027
			//         },
			//         {
			//             "stat": "DEF_FLAT",
			//             "amount": 33
			//         },
			//         {
			//             "stat": "EFFECT_HIT_RATE",
			//             "amount": 0.034
			//         }
			//     ]
			// },
		}

		return { charList };
	}
} satisfies Actions;
