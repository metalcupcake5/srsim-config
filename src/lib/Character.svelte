<script lang="ts">
	let { character, lightcone }: any = $props();

	let relics = $state({
		head: {
			set: 'no set',
			main: {
				stat: 'hp',
				amount: 100
			},
			subs: []
		},
		hands: {
			set: 'no set',
			main: {
				stat: 'atk',
				amount: 100
			},
			subs: []
		},
		body: {
			set: 'no set',
			main: {
				stat: 'crit_rate',
				amount: 100
			},
			subs: []
		},
		feet: {
			set: 'no set',
			main: {
				stat: 'speed',
				amount: 100
			},
			subs: []
		},
		sphere: {
			set: 'no set',
			main: {
				stat: 'atk',
				amount: 100
			},
			subs: []
		},
		rope: {
			set: 'no set',
			main: {
				stat: 'atk',
				amount: 100
			},
			subs: []
		}
	});

	let char = $derived({
		name: 'character',
		level: 80,
		maxLevel: 80,
		startEnergy: 80,
		eidolon: 0,
		relics
	});

	let lc = $state({
		name: 'light cone',
		level: 80,
		maxLevel: 80,
		superimposition: 0
	});
</script>

<div class="container">
	<h3>stats</h3>
	<div class="inputs">
		<div class="input">
			<label for="name">Name</label>
			<input id="name" type="text" bind:value={char.name} oninput={() => character(char)} />
		</div>
		<div class="input">
			<label for="level">Current Level</label>
			<input id="level" type="number" bind:value={char.level} oninput={() => character(char)} />
		</div>
		<div class="input">
			<label for="maxLevel">Max Level</label>
			<input
				id="maxLevel"
				type="number"
				bind:value={char.maxLevel}
				oninput={() => character(char)}
			/>
		</div>
		<div class="input">
			<label for="startEnergy">start energy</label>
			<input
				id="startEnergy"
				type="number"
				bind:value={char.startEnergy}
				oninput={() => character(char)}
			/>
		</div>
		<div class="input">
			<label for="eidolon">eidolon</label>
			<input id="eidolon" type="number" bind:value={char.eidolon} oninput={() => character(char)} />
		</div>
	</div>
	<h3>light cone</h3>
	<div class="inputs">
		<div class="input">
			<label for="lcName">light cone</label>
			<input id="lcName" type="string" bind:value={lc.name} oninput={() => lightcone(lc)} />
		</div>
		<div class="input">
			<label for="lcLevel">level</label>
			<input id="lcLevel" type="number" bind:value={lc.level} oninput={() => lightcone(lc)} />
		</div>
		<div class="input">
			<label for="lcMaxLevel">Max Level</label>
			<input id="lcMaxLevel" type="number" bind:value={lc.maxLevel} oninput={() => lightcone(lc)} />
		</div>
		<div class="input">
			<label for="superimposition">superimposition</label>
			<input
				id="superimposition"
				type="number"
				bind:value={lc.superimposition}
				oninput={() => lightcone(lc)}
			/>
		</div>
	</div>
	<h3>relics</h3>
	<div class="container">
		<h5>head</h5>
		<div class="inputs">
			<div class="input">
				<label for="relic1Set">set</label>
				<input
					id="relic1Set"
					type="string"
					bind:value={relics.head.set}
					oninput={() => character(char)}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		width: 25vw;
	}

	.inputs {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
		flex-direction: column;
	}

	.input {
		display: flex;
		flex-direction: row;
	}
</style>
