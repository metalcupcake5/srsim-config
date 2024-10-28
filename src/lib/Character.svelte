<script lang="ts">
	let {
		charName,
		charLevel,
		charMaxLevel,
		charStartEnergy,
		charEdiolon,
		lcName,
		lcLevel,
		lcMaxLevel,
		lcSuperimposition
	}: any = $props();
	let name = $state('Character');
	let level = $state(80);
	let maxLevel = $state(80);
	let startEnergy = $state(0);
	let eidolon = $state(0);
	let lightconeName = $state('light cone');
	let lightconeLevel = $state(80);
	let lightconeMaxLevel = $state(80);
	let superimposition = $state(1);
</script>

<div class="container">
	<h3>stats</h3>
	<div class="inputs">
		<div class="input">
			<label for="name">Name</label>
			<input id="name" type="text" bind:value={name} oninput={() => charName(name)} />
		</div>
		<div class="input">
			<label for="level">Current Level</label>
			<input id="level" type="number" bind:value={level} oninput={() => charLevel(level)} />
		</div>
		<div class="input">
			<label for="maxLevel">Max Level</label>
			<input
				id="maxLevel"
				type="number"
				bind:value={maxLevel}
				oninput={() => charMaxLevel(maxLevel)}
			/>
		</div>
		<div class="input">
			<label for="startEnergy">start energy</label>
			<input
				id="startEnergy"
				type="number"
				bind:value={startEnergy}
				oninput={() => charStartEnergy(startEnergy)}
			/>
		</div>
		<div class="input">
			<label for="eidolon">eidolon</label>
			<input id="eidolon" type="number" bind:value={eidolon} oninput={() => charEdiolon(eidolon)} />
		</div>
	</div>
	<h3>light cone</h3>
	<div class="inputs">
		<div class="input">
			<label for="lcName">light cone</label>
			<input
				id="lcName"
				type="string"
				bind:value={lightconeName}
				oninput={() => lcName(lightconeName)}
			/>
		</div>
		<div class="input">
			<label for="lcLevel">level</label>
			<input
				id="lcLevel"
				type="number"
				bind:value={lightconeLevel}
				oninput={() => lcLevel(lightconeLevel)}
			/>
		</div>
		<div class="input">
			<label for="lcMaxLevel">Max Level</label>
			<input
				id="lcMaxLevel"
				type="number"
				bind:value={lightconeMaxLevel}
				oninput={() => lcMaxLevel(lightconeMaxLevel)}
			/>
		</div>
		<div class="input">
			<label for="superimposition">superimposition</label>
			<input
				id="superimposition"
				type="number"
				bind:value={superimposition}
				oninput={() => lcSuperimposition(superimposition)}
			/>
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
