import React, { Component } from 'react';

class MenuTentangKami extends Component {
	constructor(props){
		super(props);
		this.state={
			motto: 'Warung Nusantara adalah Restoran yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Nusantara',
		}
	}
		render(){
			return(
				<div>
				<center>
				<p>Tentang Kami</p>
				{this.state.motto}
				</center>
				</div>
			);
		}
}

export default MenuTentangKami