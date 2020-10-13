class AutoBind {
    constructor(childName) {
        this.bindAllFuncs(childName);
    }

    bindAllFuncs(childName) {
        var props = [];
        var obj = this;
        do {
            if (obj.constructor.name == childName) {
                props = props.concat(Object.getOwnPropertyNames(obj));
            }
        } while (obj = Object.getPrototypeOf(obj));

        props.filter(function (e, i, arr) {
            return functionsPredicate(e, arr, i);
        }).forEach(method => {
            this[method] = this[method].bind(this);
        });


        function functionsPredicate(e, arr, i) {
            return (e != 'constructor');
        }
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