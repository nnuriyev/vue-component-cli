import Props from "../Models/Module/Props";
import Data from "../Models/Module/Data";
import Components from "../Models/Module/Components";
import Methods from "../Models/Module/Methods";
import Computed from "../Models/Module/Computed";
import Watch from "../Models/Module/Watch";


export default class Module {
    constructor() {
        this.props = new Props();
        this.data = () => new Data();
        this.components = new Components();
        this.methods = new Methods();
        this.computed = new Computed();
        this.watch = new Watch();
    }
}
