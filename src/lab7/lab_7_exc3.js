class Counter extends AutoBind {
    constructor(btn) {
        this.btn = btn;
    }
}

class Counter extends AutoBind {
  constructor(btn) {
    super();
    this.btn = btn;
    this.btn.textContent = '0';
    btn.addEventListener('click', this.inc);
  }
  
  inc() {
    this.btn.textContent++;
  }
}

const c = new Counter(document.querySelector('button'));