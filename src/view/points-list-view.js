import { createElement } from '../render';

// $======================== PointListView ========================$ //

const createPointListTemplate = () => /*html*/`
  <ul class="trip-events__list"></ul>
`;

export default class PointsListView {
  getTemplate() {
    return createPointListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
