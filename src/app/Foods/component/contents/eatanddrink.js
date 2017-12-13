import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class EatAndDrink extends React.Component {

	constructor(props) {
		super(props);
		this.state= {

			artice_hide_state:{
				'height':'0',
				'overflow':'hidden'
			},
			isSpreadArticle:false
		};
		this.spreadArticle = this.spreadArticle.bind(this);
		this.getHeightOfArticle = this.getHeightOfArticle.bind(this);
	}

	getHeightOfArticle(articleInstance){
		this.heightOfArticle = articleInstance.clientHeight - 16;
	}
	spreadArticle(e){
		if(!this.isSpread){
			this.isSpread = true;
			this.setState({
				artice_hide_state:{
					'height':this.heightOfArticle,
					'marginBottom':16,
					'transition':'all 0.25s ease-in-out',
					'overflow':'hidden'
				},
				isSpreadArticle:true
			},function(){


			});
		}else{
			this.isSpread = false;
			this.setState({
				artice_hide_state:{
					'height':0,
					'marginBottom':0,
					'transition':'all 300ms ease-in-out',
					'overflow':'hidden'
				},
				isSpreadArticle:false
			},function(){


			});
		}




	}

	render(){
		var PictureTexts = this.props.pictextdata || [];
		return(
			<div className={styleSheet.articalwrap}>
					<div className={styleSheet.title_detail}>吃喝指南</div>
					{
						PictureTexts.map((value,index)=>{
							if(index < 2){
								return(
									<div className={styleSheet.artitem} key={value.PictureTextId} ref={this.getHeightOfArticle}>
											<div className={styleSheet.artitem_left}>
													<img src={value.ImageUrl}/>
											</div>
											<div className={styleSheet.artitem_right}>
													<span className={styleSheet.artice_title}>{value.Title}</span>
													<span className={styleSheet.lip}><img src={value.AuthorPortrait}/><span>{value.AuthorName}</span></span>
											</div>
									</div>
								)
							}
						})
			    }
					<div className={styleSheet.hidepart} style={this.state.artice_hide_state}>
							{
								PictureTexts.map((value,index)=>{
									if(index>1){
										return(
											<div className={styleSheet.artitem} key={value.PictureTextId}>
													<div className={styleSheet.artitem_left}>
															<img src={value.ImageUrl}/>
													</div>
													<div className={styleSheet.artitem_right}>
															<span className={styleSheet.artice_title}>{value.Title}</span>
															<span className={styleSheet.lip}><img src={value.AuthorPortrait}/><span>{value.AuthorName}</span></span>
													</div>
											</div>
										)
									}
								})
						}
					</div>
					{
						PictureTexts.length > 2 ? (
							<div className={styleSheet.spreadmorepack} onClick={this.spreadArticle}>
		            {this.state.isSpreadArticle ? '收起' : '展开更多文章'}
		        	</div>
						):''
					}

			 </div>
		)
	}
}
