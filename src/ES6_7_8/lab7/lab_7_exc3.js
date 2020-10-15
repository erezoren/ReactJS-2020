class AutoBind {
  constructor(childName) {
    let methods = this.getAllMethods(childName);
    this.bindFunctions(methods);
  }

  getAllMethods(childName) {
    var props = [];
    var obj = this;
    do {
      if (obj.constructor.name == childName) {
        props = props.concat(Object.getOwnPropertyNames(obj));
      }
    } while (obj = Object.getPrototypeOf(obj));

    return props.filter(function (e, i, arr) {
      return functionsPredicate(e, arr, i);
    });

    function functionsPredicate(e, arr, i) {
      return (e != 'constructor');
    }
  }

  bindFunctions(...functionsNames) {
    functionsNames.forEach(f => this[f] = this[f].bind(this))
  }

}

class Counter extends AutoBind {
  constructor(btn) {
    super(Counter.name);
    this.btn = btn;
    this.btn.textContent = '0';
    btn.addEventListener('click', this.inc);
  }

  inc() {
    this.btn.textContent++;
  }
}

const c = new Counter(document.querySelector('button'));