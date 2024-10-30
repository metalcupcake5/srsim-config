<script lang="ts">
	import YAML from 'yaml';
	let { form } = $props();

	import characters from '$lib/characters.json';

	let current = $state(form ? form?.charList[0] : 'no data');

	function setCurrent(name: string) {
		current = form.charList.find((c) => c.name == name);
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
</script>

<form method="POST">
	<label>
		Enter Uid
		<input name="uid" type="number" />
	</label>
	<button>Find Chars</button>
</form>

{#if form}
	{#each form.charList as c}
		<button onclick={() => setCurrent(c.name)}>{c.name}</button>
	{/each}

	<br />
	<button use:copy>Copy</button>
	<pre><code>{YAML.stringify(current)}</code></pre>
{/if}

<style>
	pre {
		padding: 10px;
		background-color: #f4f4f4;
		font-family: 'Courier New', Courier, monospace;
	}

	code {
		white-space: pre-wrap;
	}
</style>
