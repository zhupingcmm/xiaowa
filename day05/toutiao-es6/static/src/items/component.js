
export default class Component {
    constructor(props){
        this.props = props;
    }

    render(){
        return '<div>I am base component</div>'
    }

    constructorElement(){
        const html = this.render();
        const $content = document.createElement('div');
        $content.innerHTML = html;
        this.el = $content;

        return this.el;
    }

}
