import AbstractView from '../framework/view/abstract-view';

// $======================== FailedLoadView ========================$ //

const createFailedLoadTemplate = () => /* html */`
  <p class="trip-events__msg">Failed to load latest route information</p>
`;

export default class LoadingView extends AbstractView {
  get template() {
    return createFailedLoadTemplate();
  }
}
