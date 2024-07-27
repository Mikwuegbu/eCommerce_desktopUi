import {
	banner1,
	banner2,
	model1,
	model2,
	model5,
	model6,
} from "../../../assets/images";

const Explore = () => {
	return (
		<div className='py-8 flex justify-center'>
			<div className='grid grid-cols-2 gap-3 max-w-screen-lg'>
				<div className='flex flex-col gap-y-3.5'>
					<div className='h-44'>
						<img
							src={banner1}
							alt=''
							className='w-full h-full object-cover rounded-2xl'
						/>
					</div>
					<div className='h-44'>
						<img
							src={banner2}
							alt=''
							className='w-full h-full object-cover rounded-2xl'
						/>
					</div>
					<div className='grid grid-cols-2 gap-x-3.5'>
						<div className='relative w-full h-96 overflow-hidden rounded-2xl'>
							<img src={model1} alt='' className='w-full h-full object-cover' />
						</div>
						<div className='relative w-full h-96 overflow-hidden rounded-2xl'>
							<img src={model2} alt='' className='w-full h-full object-cover' />
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-y-3'>
					<div className='grid grid-cols-2 gap-x-3'>
						<div className='relative w-full h-96 overflow-hidden rounded-2xl'>
							<img src={model1} alt='' className='w-full h-full object-cover' />
						</div>
						<div className='relative w-full h-96 overflow-hidden rounded-2xl'>
							<img src={model2} alt='' className='w-full h-full object-cover' />
						</div>
					</div>
					<div className='flex flex-col gap-y-3.5'>
						<div className='w-full h-44'>
							<img
								src={model5}
								alt=''
								className='w-full h-full object-cover object-right-top rounded-2xl'
							/>
						</div>
						<div className='relative w-full h-44'>
							<img
								src={model6}
								alt=''
								className='w-full h-full object-cover object-right-top rounded-2xl'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explore;
