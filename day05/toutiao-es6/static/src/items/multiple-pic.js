import Component from './component'


export default class MultiplePic extends Component{
    constructor(props){
        super(props);

    }

    render() {

        const {data} = this.props;
        const imageList = data.imageList.map(imageUrl=>{
            // return imageUrl
            return `<img src=${imageUrl}  alt=""/>`
        }).join('');
        return `
            <div class="item multiple-image" >
                <h3>
                    ${data.title}
                </h3>
                <div class="image-list">
                    ${imageList}
                </div>
            </div>
        `;
    }

}
