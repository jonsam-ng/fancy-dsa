class Queue {
	constructor(elements) {
		this.fromArray(Array.isArray(elements) ? elements : []);
	}

	enqueue(ele) {
		this._elements.push(ele);
		return this;
	}

	dequeue() {
		const front = this.front();
		if (!front) return front;
		this._offset += 1;
		if (this._offset * 2 > this._elements.length) {
			this._elements = this.toArray();
			this._offset = 0;
		}
		return front;
	}

	front() {
		return this.isEmpty() ? null : this._elements[this._offset];
	}

	rear() {
		return this.isEmpty() ? null : this._elements[this._elements.length - 1];
	}

	size() {
		return this._elements.length - this._offset;
	}

	isEmpty() {
		return this.size() === 0;
	}

	toArray() {
		return this._elements.slice(this._offset);
	}

	fromArray(elements) {
		this._elements = elements;
		this._offset = 0;
		return this;
	}

	clone() {
		return new Queue(this.toArray());
	}

	clear() {
		this._elements = [];
		this._offset = 0;
	}
}

class SimpleQueue {
	constructor(elements) {
		this._elements = Array.isArray(elements) ? elements : [];
	}

	enqueue(ele) {
		this._elements.push(ele);
		return this;
	}

	dequeue() {
		return this._elements.shift();
	}

	front() {
		return this.isEmpty() ? null : this._elements[0];
	}

	rear() {
		return this.isEmpty() ? null : this._elements[this._elements.length - 1];
	}

	size() {
		return this._elements.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	toArray() {
		return this._elements;
	}

	clone() {
		return new SimpleQueue(this.toArray());
	}

	clear() {
		this._elements = [];
	}
}

const q = new SimpleQueue([1, 2, 3]);
q.enqueue(4);
q.dequeue();
q.dequeue();
q.dequeue();
q.clear();
const r = q.dequeue();
console.log("==>", { r });
console.log("==>", {
	q: q.toArray(),
	f: q.front(),
	r: q.rear(),
	s: q.size(),
	isEmpty: q.isEmpty(),
	_e: q._elements,
});
