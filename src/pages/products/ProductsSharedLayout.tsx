import { Outlet, NavLink } from 'react-router-dom';
import { logo } from '../../assets/icons/icons';
import { FcFlashOn } from 'react-icons/fc';
import {
	GiClothes,
	GiCutDiamond,
	GiPresent,
	GiRunningShoe,
} from 'react-icons/gi';
import { BsHandbagFill } from 'react-icons/bs';
import { MdSportsMartialArts } from 'react-icons/md';
import { IoChatbubble } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { CiSearch, CiUser } from 'react-icons/ci';
import { useContext } from 'react';
import { ExploreContext } from './Provider';
import { Link } from 'react-router-dom';

interface Explore {
	id: number;
	title: string;
	icon: React.ReactNode;
}

const exploreProducts: Explore[] = [
	{ id: 1, title: 'New in', icon: <FcFlashOn size={22} /> },
	{ id: 2, title: 'Clothing', icon: <GiClothes size={22} /> },
	{ id: 3, title: 'Shoes', icon: <GiRunningShoe size={22} /> },
	{ id: 4, title: 'Accessories', icon: <BsHandbagFill size={22} /> },
	{ id: 5, title: 'Activewear', icon: <MdSportsMartialArts size={22} /> },
	{ id: 6, title: 'Gifts & Living', icon: <GiPresent size={22} /> },
	{ id: 7, title: 'Inspiration', icon: <GiCutDiamond size={22} /> },
];

const ProductsSharedLayout = () => {
	const exploreBtn = useContext(ExploreContext);

	const handleClick = (btn: string) => {
		exploreBtn?.dispatch({ type: btn, payload: btn });
	};

	console.log(exploreBtn?.location);

	return (
		<div className="grid grid-flow-col gap-x-16 px-12">
			<div className="py-12 grid grid-flow-row">
				<div className="flex w-28 h-11">
					<img src={logo} alt={logo} className="" />
				</div>
				<Link
					to="/products"
					onClick={() => handleClick('explore')}
					className="font-Sofia-Sans font-bold text-3xl flex"
				>
					Explore
				</Link>
				<div className="space-y-6 font-poppins font-medium text-justify">
					{exploreProducts.map((explore) => (
						<Link
							to="/products"
							onClick={() => handleClick(explore.title)}
							key={explore.id}
							className="flex space-x-2.5 hover:font-normal"
						>
							{explore.icon}
							<p className="text-nowrap">{explore.title}</p>
						</Link>
					))}
				</div>
				<div className="font-poppins font-medium flex space-x-2.5">
					<IoChatbubble size={22} />
					<p>Help Center</p>
				</div>
			</div>
			<div className="pt-14 grid justify-between">
				<nav className="grid grid-flow-col justify-between place-items-center">
					<div className="relative">
						<CiSearch size={23} className="absolute top-2 left-0 right-0" />
						<input
							type="text"
							className="py-1.5 pl-7 outline-none focus:border-b-2"
							placeholder="search store"
						/>
					</div>
					<div className="flex justify-center place-items-center space-x-3">
						<div className="flex space-x-10 font-poppins font-medium text-base">
							<NavLink
								to="/products"
								className={({ isActive }) =>
									isActive ? 'border-b-2 border-black' : ''
								}
							>
								Products
							</NavLink>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? 'border-b-2 border-black' : ''
								}
							>
								Story
							</NavLink>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? 'border-b-2 border-black' : ''
								}
							>
								Manufacturing
							</NavLink>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? 'border-b-2 border-black' : ''
								}
							>
								packaging
							</NavLink>
						</div>
						<div className="flex space-x-6">
							<button>
								<RiDeleteBin5Line />
							</button>
							<button>
								<CiUser />
							</button>
						</div>
					</div>
				</nav>
				<div className="overflow-hidden">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default ProductsSharedLayout;