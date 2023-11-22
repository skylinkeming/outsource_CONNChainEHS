import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';
import DropdownNotification from './dropdown/notification.jsx';
import DropdownLanguage from './dropdown/language.jsx';
import DropdownProfile from './dropdown/profile.jsx';
import SearchForm from './search/form.jsx';
import DropdownMegaMenu from './dropdown/mega.jsx';
import tw from '../../assets/img/flag/tw.svg';
import us from '../../assets/img/flag/us.svg';
import jp from '../../assets/img/flag/jp.svg';


import { AppSettings } from './../../config/app-settings.js';

function Header() {
	const { t, i18n } = useTranslation();
	const [flag, setFlag] = useState("zh");

	useEffect(() => {
		setCurrentNationFlag();
		localStorage.setItem("loginUser", JSON.stringify({
			loginUserId:"CLOUDT001",
			loginRoleLevel:2,
			loginRoleId:"3",
		}))
	}, [i18n.language])

	const setCurrentNationFlag = () => {
		let nation = i18n.language;
		switch (nation) {
			case "zh": {
				setFlag(tw);
				break;
			}
			case "en": {
				setFlag(us);
				break;
			}
			case "jp": {
				setFlag(jp);
				break;
			}
			default: {
				setFlag(tw);
			}
		}
	}


	return (
		<AppSettings.Consumer>
			{({ toggleAppSidebarMobile, toggleAppSidebarEnd, toggleAppSidebarEndMobile, toggleAppTopMenuMobile, appHeaderLanguageBar, appHeaderMegaMenu, appHeaderInverse, appSidebarTwo, appTopMenu, appSidebarNone }) => (
				<div id="header" className="app-header" data-bs-theme={appHeaderInverse ? 'dark' : ''}>
					<div className="navbar-header">
						{appSidebarTwo && (
							<button type="button" className="navbar-mobile-toggler" onClick={toggleAppSidebarEndMobile}>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						)}
						<Link to="/" className="navbar-brand"><span className="navbar-logo"></span> <b>CONNChainEHS</b>  雲端環安衛管理平台</Link>

						{appHeaderMegaMenu && (
							<button type="button" className="navbar-mobile-toggler" data-bs-toggle="collapse" data-bs-target="#top-navbar">
								<span className="fa-stack fa-lg text-inverse">
									<i className="far fa-square fa-stack-2x"></i>
									<i className="fa fa-cog fa-stack-1x"></i>
								</span>
							</button>
						)}
						{appTopMenu && !appSidebarNone && (
							<button type="button" className="navbar-mobile-toggler" onClick={toggleAppTopMenuMobile}>
								<span className="fa-stack fa-lg text-inverse">
									<i className="far fa-square fa-stack-2x"></i>
									<i className="fa fa-cog fa-stack-1x"></i>
								</span>
							</button>
						)}
						{appSidebarNone && appTopMenu && (
							<button type="button" className="navbar-mobile-toggler" onClick={toggleAppTopMenuMobile}>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						)}
						{!appSidebarNone && (
							<button type="button" className="navbar-mobile-toggler" onClick={toggleAppSidebarMobile}>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						)}
					</div>

					{appHeaderMegaMenu && (
						<DropdownMegaMenu />
					)}
					<div className="navbar-nav">
						<RightCornerWrap>
							<div className="navbar-item navbar-user dropdown">
								<a href="#" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
									<i className="fas fa-circle-user fa-2x"></i>
									<span>
										<span className="d-none d-md-inline">雲集管理者</span>
										<b className="caret"></b>
									</span>
								</a>
								<div className="dropdown-menu dropdown-menu-end me-1">
									<a href="#" className="dropdown-item">個人資料</a>
									<div className="dropdown-divider"></div>
									<a href="../../frontend/login.html" className="dropdown-item">登出</a>
								</div>
							</div>
							<div className="navbar-item dropdown">
								<a href="#" className="navbar-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="currentFlag h3 rounded mb-0" title="tw"><img src={flag} /></span>
									<b className="caret"></b>
								</a>
								<div className="dropdown-menu dropdown-menu-end me-1">
									<a href="#" className="flag dropdown-item d-flex align-items-center mb-3" onClick={() => { i18n.changeLanguage("zh") }}>
										<img src={tw} />
										<div className="ps-2 fw-bold">繁體中文</div>
									</a>
									<a href="#" className="flag dropdown-item d-flex align-items-center mb-3" onClick={() => { i18n.changeLanguage("en") }}>
										<img src={us} />
										<div className="ps-2 fw-bold">ENGLISH</div>
									</a>
									<a href="#" className="flag dropdown-item d-flex align-items-center mb-3">
										<img src={jp} />
										<div className="ps-2 fw-bold">日本語</div>
									</a>
								</div>
							</div>
						</RightCornerWrap>
					</div>
				</div>
			)}
		</AppSettings.Consumer>
	)
}


const RightCornerWrap = styled.div`
	display:flex;
	width:200px;
	align-items:center;
	justify-content:space-between;
	margin-right:10px;
	.fas.fa-circle-user.fa-2x {
		font-size:2em !important;
		margin-right:10px;
	}
	.flag,.currentFlag {
		overflow:hidden;
		img {
			width:27.95px;
			height:20.96px;
			border-radius:4px;
			margin-right:5px;
		}
	}
	@media (max-width:767px) {
		width:auto;
	}
	
`;

export default Header;
