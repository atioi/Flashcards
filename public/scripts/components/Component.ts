class Component {

    protected readonly _html: any;

    constructor(html: any) {
        this._html = html;
    }

    get html(): any {
        return this._html;
    }

    set id(id: string) {
        this.html.id = id;
    }

    set className(className: string) {
        this.html.className = className;
    }

    public addEventListener(event: string, callback: any) {
        this.html.addEventListener(event, callback);
    }

    public append(component: Component) {
        this.html.append(component.html);
    }

    public remove() {
        this.html.remove();
    }

    public appendClass(cls: string) {
        this._html.classList.add(cls);
    }
}


export {Component};
