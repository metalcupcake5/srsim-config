<script lang="ts">
	let { name, level, maxLevel, startEnergy, ediolon }: any = $props();
	let charName = $state('Character');
	let charLevel = $state(80);
	let charMaxLevel = $state(80);
	let charStartEnergy = $state(0);
	let charEidolon = $state(0);
</script>

<div class="character">
	<div class="input">
		<label for="name">Name</label>
		<input id="name" type="text" bind:value={charName} oninput={() => name(charName)} />
	</div>
	<div class="input">
		<label for="level">Current Level</label>
		<input id="level" type="number" bind:value={charLevel} oninput={() => level(charLevel)} />
	</div>
	<div class="input">
		<label for="maxLevel">Max Level</label>
		<input
			id="maxLevel"
			type="number"
			bind:value={charMaxLevel}
			oninput={() => maxLevel(charMaxLevel)}
		/>
	</div>
	<div class="input">
		<label for="startEnergy">start energy</label>
		<input
			id="startEnergy"
			type="number"
			bind:value={charStartEnergy}
			oninput={() => startEnergy(charStartEnergy)}
		/>
	</div>
	<div class="input">
		<label for="eidolon">eidolon</label>
		<input
			id="eidolon"
			type="number"
			bind:value={charEidolon}
			oninput={() => ediolon(charEidolon)}
		/>
	</div>
</div>

<style>
	.character {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		flex-direction: column;
		width: 25vw;
	}

	.input {
		display: flex;
		flex-direction: row;
	}
</style>
