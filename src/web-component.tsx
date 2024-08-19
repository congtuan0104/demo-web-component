import ReactDOM from "react-dom/client";
import { ISubscriptionProps, Subscription } from "./components/Subscription";
import { normalizeAttribute } from "./utils";

class SubscriptionWebComponent extends HTMLElement {
  private _decrease: (() => void) | undefined;

  set decrease(fn: () => void) {
    this._decrease = fn;
    // const props = this.getPropsFromAttributes<ISubscriptionProps>();
    // props.decrease = this._decrease;
    // this.updateValue(props);
  }

  get decrease() {
    return this._decrease || (() => { });
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props as T;
  }


  static get observedAttributes() {
    // các thuộc tính cần theo dõi thay đổi
    return ['name', 'count'];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributeChangedCallback(attrName: string, _oldValue: any, newValue: any) {
    const props = this.getPropsFromAttributes<ISubscriptionProps>();
    props[attrName] = newValue;
    props.decrease = this._decrease;
    this.updateValue(props);
  }

  updateValue(props: ISubscriptionProps) {
    const root = ReactDOM.createRoot(this);
    root.render(<Subscription {...props} />);

  }
}

export default SubscriptionWebComponent;
