import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class EatAndDrink extends React.Component {

	constructor(props) {
		super(props);
	}
	render(){
		var PictureTexts = this.props.pictextdata || [];
		return(
			<div className={styleSheet.articalwrap}>
					<div className={styleSheet.title_detail}>吃喝指南</div>
					{
						PictureTexts.map((value,index)=>{
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
						})
			    }
					<div className={styleSheet.hidepart} style={{height:0,overflow:'hidden'}}>
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
							<div className={styleSheet.spreadmorepack}>
		            展开更多文章
		        	</div>
						):''
					}

			 </div>
		)
	}
}
