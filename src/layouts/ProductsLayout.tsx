import { Outlet } from "react-router-dom";
import { logo } from "../assets/icons/icons";
import { FcFlashOn } from "react-icons/fc";
import {
	GiClothes,
	GiCutDiamond,
	GiPresent,
	GiRunningShoe,
	GiShoppingCart,
} from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import { MdSportsMartialArts } from "react-icons/md";
import { IoChatbubble, IoCloseOutline } from "react-icons/io5";
import { CiSearch, CiUser } from "react-icons/ci";
import { useContext, useState } from "react";
import { ExploreContext } from "../utils/context";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IoIosMenu } from "react-icons/io";

interface Explore {
	id: number;
	title: string;
	icon: React.ReactNode;
}

const exploreProducts: Explore[] = [
	{ id: 1, title: "New in", icon: <FcFlashOn size={22} /> },
	{ id: 2, title: "Clothing", icon: <GiClothes size={22} /> },
	{ id: 3, title: "Shoes", icon: <GiRunningShoe size={22} /> },
	{ id: 4, title: "Accessories", icon: <BsHandbagFill size={22} /> },
	{ id: 5, title: "Activewear", icon: <MdSportsMartialArts size={22} /> },
	{ id: 6, title: "Gifts & Living", icon: <GiPresent size={22} /> },
	{ id: 7, title: "Inspiration", icon: <GiCutDiamond size={22} /> },
];

const ProductsSharedLayout = () => {
	const exploreBtn = useContext(ExploreContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const cartNumofItems = useSelector(
		(state: RootState) => state.cart.items.length
	);

	const handleClick = (btn: string) => {
		exploreBtn?.dispatch({ type: btn, payload: btn });
	};

	return (
		<div className='flex flex-row space-y-24 relative'>
			<div className='py-6 pt-8 md:px-6 place-items-center md:space-x-4 flex px-6 justify-between md:fixed left-0 right-0 bg-white z-10'>
				<div className='md:flex w-28 h-11 hidden'>
					<img src={logo} alt={logo} className='' />
				</div>
				<button onClick={toggleMenu} className='md:hidden relative top-1'>
					{!isOpen ? (
						<IoIosMenu size={26} />
					) : (
						<IoCloseOutline size={26} className='relative left-40 z-10 top-1' />
					)}
				</button>
				<div className='absolute top-0 left-0'>
					{isOpen && (
						<nav className='space-y-24 absolute px-6 pt-28 h-screen w-56 bg-gray-200 bg-opacity-45'>
							<div className='space-y-5 font-poppins font-medium text-justify'>
								{exploreProducts.map((explore) => (
									<Link
										to={`/products/${explore.title.toLowerCase()}`}
										onClick={() => handleClick(explore.title)}
										key={explore.id}
										className='flex space-x-2.5 hover:font-normal'
									>
										{explore.icon}
										<p className='text-nowrap'>{explore.title}</p>
									</Link>
								))}
							</div>
							<div className='font-poppins font-medium flex space-x-2.5'>
								<IoChatbubble size={22} />
								<p>Help Center</p>
							</div>
						</nav>
					)}
				</div>
				<div className='flex place-items-center lg:pr-8'>
					{!isOpen && (
						<div className='relative ml-12'>
							<CiSearch
								size={23}
								className='absolute top-2 md:-left-28 left-0 right-0 w-5 md:w-full'
							/>
							<input
								type='text'
								className='py-1.5 w-2/3 md:w-full md:pl-10 placeholder:pl-8 outline-none placeholder:text-sm md:placeholder:text-base focus:border-b-2'
								placeholder='search store'
							/>
						</div>
					)}
					<div
						className={`${isOpen ? "pt-2.5 flex absolute pr-8 right-0 space-x-2.5 lg:space-x-6" : "flex space-x-2.5 lg:space-x-6"}`}
					>
						<Link to='/billing' className='flex space-x-1'>
							<GiShoppingCart />
							<p className='text-xs'>{cartNumofItems}</p>
						</Link>
						<Link to='/auth/login'>
							<CiUser />
						</Link>
					</div>
				</div>
			</div>
			<div className='px-10 hidden md:block'>
				<nav className='space-y-24 py-12 fixed'>
					<Link
						to='/products'
						onClick={() => handleClick("explore")}
						className='font-Sofia-Sans font-bold text-3xl flex'
					>
						Explore
					</Link>
					<div className='space-y-6 font-poppins font-medium text-justify '>
						{exploreProducts.map((explore) => (
							<Link
								to={`/products/${explore.title.toLowerCase()}`}
								onClick={() => handleClick(explore.title)}
								key={explore.id}
								className='flex space-x-2.5 hover:font-normal'
							>
								{explore.icon}
								<p className='text-nowrap'>{explore.title}</p>
							</Link>
						))}
					</div>
					<div className='font-poppins font-medium flex space-x-2.5'>
						<IoChatbubble size={22} />
						<p>Help Center</p>
					</div>
				</nav>
				<div className='ml-48'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default ProductsSharedLayout;
