interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

// Concrete Observable
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }
  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Concrete Obeserver
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(Observable: Observable): void {
    if (Observable instanceof InputObservable) {
      this.element.innerText = Observable.element.value;
    }
  }
}

// Concrete Obeserver
class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(Observable: Observable): void {
    if (Observable instanceof InputObservable) {
      this.element.innerText = Observable.element.value;
    }
  }
}

// Cliente code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Olá mundo';
  return p;
}

function makeDiv(): HTMLDivElement {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.innerText = 'Olá mundo da div';
  return div;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());
const div2 = new DivObserver(makeDiv());

input.subscribe(p1, p2, div1, div2);

input.element.addEventListener('keyup', function () {
  input.notify();
});

//input.unsubscribe(div1);
