import { usePlacesWidget } from 'react-google-autocomplete';
const apikey = import.meta.env.VITE_GOOGLEMAP_API;
const ShopNameInput = ({ label, register, errors }) => {
	const error = { ...errors };
	const { ref } = usePlacesWidget({
		apiKey: apikey,
		onPlaceSelected: (place) => console.log(place),
		options: {
			componentRestrictions: { country: 'kr' },
			types: ['establishment'],
		},
	});

	return (
		<div className="mt-1 flex flex-col">
			<label htmlFor="shopName" className="text-xs">
				{label}
			</label>
			<input
				{...register(label, {
					required: '필수 입력 항목입니다.',
				})}
				ref={ref}
				id="shopName"
				className="h-8 rounded border mt-2 border-black"
			/>
			{error[label] && (
				<span className="text-xs text-red-500">{error[label].message}</span>
			)}
		</div>
	);
};

export default ShopNameInput;
