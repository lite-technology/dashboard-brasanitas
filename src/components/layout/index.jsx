import { AiOutlineHome, AiOutlineFileProtect, AiOutlineSolution} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import React, { useState }from 'react';

import { Container, Background, Menu, MenuSelector } from './styles';
import logo from '../../assets/images/logos.png';

const menuOptions = [
	{
		name: "Dashboard",
		icon: AiOutlineHome,
		route: "/dashboard"
	},
	{
		name: "Relatório",
		icon: AiOutlineFileProtect,
		route: "/relatorio"
	},
	{
		name: "Formulário",
		icon: AiOutlineSolution,
		route: "/formulario"
	},

]
const Layout = ({children, initialSelect='dashboard'}) => {

const [select, setSelect] = useState(initialSelect);
const navigate = useNavigate();

return (
		<Container>
			<Menu>
				<div className="header">
					<img src={logo} alt="logos" />
				</div>
				<div className="buttons">
					{
						menuOptions.map((menu, index) => {
							var Icon = menu.icon;
							return (
								<MenuSelector key={index} onClick={() => navigate(menu.route)} select={menu.name==select}>
									<Icon color='#eeeeee' size={24}/>
									<p>{menu.name}</p>
								</MenuSelector>
							)
						})
					}
				</div>
			</Menu>
			<Background>
					{children}
			</Background>
		</Container>
	)

}

export default Layout
