<script lang="ts">
	import YAML from 'yaml';
	import Character from '$lib/Character.svelte';

	let chars: Char[] = $state([]);

	type Char = {
		id: number;
		name: string;
		level: number;
		maxLevel: number;
		startEnergy: number;
		eidolon: number;
	};

	function onclick() {
		chars = [
			...chars,
			{
				id: chars.length + 1,
				name: 'Character',
				level: 80,
				maxLevel: 80,
				startEnergy: 0,
				eidolon: 0
			}
		];
	}

	function remove(index: number) {
		chars.splice(index, 1);
	}

	const settings = $derived({
		settings: {
			cycle_limit: 10,
			ttk_mode: true
		},
		characters: chars.map((c: Char) => {
			return {
				key: c.name,
				level: c.level,
				max_level: c.maxLevel,
				start_energy: c.startEnergy,
				eidols: c.eidolon
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
</script>

<div class="characters">
	{#each chars as c, i}
		<div>
			<Character
				name={(n: string) => (c.name = n)}
				level={(l: number) => (c.level = l)}
				maxLevel={(l: number) => (c.maxLevel = l)}
				startEnergy={(e: number) => (c.startEnergy = e)}
				eidolon={(e: number) => (c.eidolon = e)}
			/>
			<button onclick={() => remove(i)}>Remove Character</button>
		</div>
	{/each}
</div>
<button disabled={chars.length > 3} {onclick}>add char</button>
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
