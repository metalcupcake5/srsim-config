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
		<label>Name</label>
		<input type="text" bind:value={charName} oninput={() => name(charName)} />
	</div>
	<div class="input">
		<label>Current Level</label>
		<input type="number" bind:value={charLevel} oninput={() => level(charLevel)} />
	</div>
	<div class="input">
		<label>Max Level</label>
		<input type="number" bind:value={charMaxLevel} oninput={() => maxLevel(charMaxLevel)} />
	</div>
	<div class="input">
		<label>start energy</label>
		<input
			type="number"
			bind:value={charStartEnergy}
			oninput={() => startEnergy(charStartEnergy)}
		/>
	</div>
	<div class="input">
		<label>eidolon</label>
		<input type="number" bind:value={charEidolon} oninput={() => ediolon(charEidolon)} />
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
