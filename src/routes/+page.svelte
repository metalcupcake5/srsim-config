<script lang="ts">
	import YAML from 'yaml';
	import Character from '$lib/Character.svelte';

	type Char = {
		id: number;
		name: string;
		level: number;
		maxLevel: number;
		startEnergy: number;
		eidolon: number;
		traces: string[];
		abilities: {
			attack: number;
			skill: number;
			ult: number;
			talent: number;
		};
		lightCone: {
			name: string;
			level: number;
			maxLevel: number;
			superimposition: number;
		};
	};

	// function onclick() {
	// 	chars = [
	// 		...chars,
	// 		{
	// 			id: chars.length + 1,
	// 			name: 'Character',
	// 			level: 80,
	// 			maxLevel: 80,
	// 			startEnergy: 0,
	// 			eidolon: 0,
	// 			traces: [
	// 				'101',
	// 				'102',
	// 				'103',
	// 				'201',
	// 				'202',
	// 				'203',
	// 				'204',
	// 				'205',
	// 				'206',
	// 				'207',
	// 				'208',
	// 				'209',
	// 				'210'
	// 			],
	// 			abilities: {
	// 				attack: 1,
	// 				skill: 1,
	// 				ult: 1,
	// 				talent: 1
	// 			}
	// 		}
	// 	];
	// }

	function remove(index: number) {
		chars.splice(index, 1);
	}

	function copy(node: EventTarget) {
		async function copyText() {
			const text = document.querySelector('code')?.innerText!!;

			try {
				await navigator.clipboard.writeText(text);

				node.dispatchEvent(
					new CustomEvent('copysuccess', {
						bubbles: true
					})
				);
			} catch (error) {
				node.dispatchEvent(
					new CustomEvent('copyerror', {
						bubbles: true,
						detail: error
					})
				);
			}
		}

		node.addEventListener('click', copyText);

		return {
			destroy() {
				node.removeEventListener('click', copyText);
			}
		};
	}

	let cycles: number = $state(10);
	let chars: Char[] = $state([]);
	const settings = $derived({
		settings: {
			cycle_limit: cycles,
			ttk_mode: true
		},
		characters: chars.map((c: Char) => {
			return {
				key: c.name,
				level: c.level,
				max_level: c.maxLevel,
				start_energy: c.startEnergy,
				eidols: c.eidolon,
				traces: c.traces,
				abilities: c.abilities,
				light_cone: {
					key: c.lightCone.name,
					level: c.lightCone.level,
					max_level: c.lightCone.maxLevel,
					imposition: c.lightCone.superimposition
				}
			};
		}),
		enemies: [
			{
				level: 80,
				key: 'dummy',
				base_stats: {
					hp: 1789500
				},
				weaknesses: ['WIND', 'QUANTUM']
			}
		]
	});

	for (let i = 0; i < 4; i++) {
		chars.push({
			id: chars.length + 1,
			name: 'Character',
			level: 80,
			maxLevel: 80,
			startEnergy: 0,
			eidolon: 0,
			traces: [
				'101',
				'102',
				'103',
				'201',
				'202',
				'203',
				'204',
				'205',
				'206',
				'207',
				'208',
				'209',
				'210'
			],
			abilities: {
				attack: 1,
				skill: 1,
				ult: 1,
				talent: 1
			},
			lightCone: {
				name: 'light_cone',
				level: 80,
				maxLevel: 80,
				superimposition: 1
			}
		});
	}
</script>

<div>
	<label for="cycles">Cycles</label>
	<input id="cycles" type="number" bind:value={cycles} />
</div>

<div class="characters">
	{#each chars as c, i}
		<div>
			<Character
				character={(character: {
					name: string;
					level: number;
					maxLevel: number;
					startEnergy: number;
					eidolon: number;
				}) => {
					c.name = character.name;
					c.level = character.level;
					c.maxLevel = character.maxLevel;
					c.startEnergy = character.startEnergy;
					c.eidolon = character.eidolon;
				}}
				lightcone={(lightcone: {
					name: string;
					level: number;
					maxLevel: number;
					superimposition: number;
				}) => {
					c.lightCone = lightcone;
				}}
			/>
			<button disabled onclick={() => remove(i)}>Remove Character</button>
		</div>
	{/each}
</div>
<button disabled={chars.length > 3} {onclick}>add char</button><br />
<button use:copy>Copy</button>
<pre><code>{YAML.stringify(settings)}</code></pre>

<style>
	pre {
		padding: 10px;
		background-color: #f4f4f4;
		font-family: 'Courier New', Courier, monospace;
	}

	code {
		white-space: pre-wrap;
	}

	.characters {
		display: flex;
		flex-direction: row;
	}
</style>
