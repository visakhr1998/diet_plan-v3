<script>
	import LoadingIndicator from './Loading.svelte';

	/**
	 * @type string
	 */
	export let cinemaType;
	/**
	 * @type Array<string>
	 */
	 export let dietType;
	/**
	 * @type Array<string>
	 */
	export let selectedCategories;
	/**
	 * @type string
	 */
	export let specificDescriptors;
	/**
	 * @type Boolean
	 */
	export let loading;
	export let numberOfMeals = 1;

	const categoryTypes = [
		'Budget',
		'Simple',
		'Healthy',
	];

	let cinemaTypes = [
		{ value: 'Italian', title: 'Italian' },
		{ value: 'Indian', title: 'Indian' },
		{ value: 'French', title: 'French' }
	];

	let dietTypes = [
		{ value: 'Vegetarian', title: 'Vegetarian' },
		{ value: 'Vegan', title: 'Vegan' },
		{ value: 'Keto', title: 'Keto' },
		{ value: 'Mediterranean', title: 'Mediterranean' },
		{ value: 'Anything', title: 'Anything' }
	];
</script>

<div class="pt-6 md:pt-10 text-slate-200">
	<div>
		<div class="mb-8">
			<div class="mb-4 font-semibold text-lg">What kind of cuisine are you searching for?</div>
			<div class="flex items-center">
				{#each cinemaTypes as type (type.value)}
					<button
						on:click={() => {
							cinemaType = type.value;
						}}
						class={`${
							cinemaType === type.value ? 'bg-pink-600/40' : ''
						} text-slate-200 font-bold mr-2 text-sm mt-2 py-2 px-4 rounded-full border border-pink-600`}
					>
						{type.title}
					</button>
				{/each}
			</div>
		</div>
		<div class="mb-8">
			<div class="mb-4 font-semibold text-lg">What kind of Diet are you searching for?</div>
			<div class="flex items-center">
				{#each dietTypes as type (type.value)}
					<button
						on:click={() => {
							dietType = type.value;
						}}
						class={`${
							dietType === type.value ? 'bg-pink-600/40' : ''
						} text-slate-200 font-bold mr-2 text-sm mt-2 py-2 px-4 rounded-full border border-pink-600`}
					>
						{type.title}
					</button>
				{/each}
			</div>
		</div>
		<div>
			<div class="mb-4 font-semibold text-lg">
				Select all categories that apply to you.
			</div>
			<div class="flex items-center flex-wrap">
				{#each categoryTypes as category}
					<label
						class={`${
							selectedCategories.includes(category) ? 'bg-pink-600/40' : ''
						} text-slate-200 font-bold mr-2 mt-2 text-sm py-2 px-4 rounded-full border border-pink-600`}
					>
						<input
							class="hidden"
							type="checkbox"
							bind:group={selectedCategories}
							name="categories"
							value={category}
						/>
						{category}
					</label>
				{/each}
			</div>
		</div>
		<div class="mt-8">
			<div class="mb-4 font-semibold text-lg">
				Input the number of calories.
			</div>
			<textarea
				bind:value={specificDescriptors}
				class="bg-white/40 border border-white/0 p-2 rounded-md placeholder:text-slate-800 text-slate-900 w-full h-20 font-medium"
				placeholder="2400 Calories."
			/>
			<div class="mb-4 mt-4 font-semibold text-lg">
				Select the number of meals:
			</div>
			<input
				type="range"
				min="1"
				max="6"
				step="1"
				bind:value={numberOfMeals}
				class="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
			/>
			<div class="text-center text-slate-200 font-bold">{numberOfMeals} Meal{numberOfMeals > 1 ? 's' : ''}</div>
			<button
				on:click
				class={`${
					loading
						? 'bg-pink-400/50'
						: 'bg-pink-600 hover:bg-gradient-to-r from-pink-700 via-pink-600 to-pink-700 '
				} mt-4 w-full h-10 text-white font-bold p-3 rounded-full flex items-center justify-center`}
			>
				{#if loading}
					<LoadingIndicator />
				{:else}
					<p>Curate My List</p>
				{/if}
			</button>
		</div>
	</div>
</div>
