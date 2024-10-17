import { INFO_DATE_FORMAT } from '../const';
import AbstractView from '../framework/view/abstract-view';
import { getDestinationById, getOffersById, humanizeTime, sortByDay } from '../utils/point';

// $======================== TripInfoView ========================$ //

const createTripInfoTemplate = (points, allDestinations, allOffers) => {
  const getDestinationName = (point) => getDestinationById(allDestinations, point.destination);

  const sortedPoints = points.sort(sortByDay);
  const firstPoint = sortedPoints[0];
  const lastPoint = sortedPoints[points.length - 1];

  const firstDestination = getDestinationName(firstPoint);

  const startDate = humanizeTime(firstPoint.dateFrom, INFO_DATE_FORMAT);
  const endDate = humanizeTime(lastPoint.dateTo, INFO_DATE_FORMAT);

  const lastDestination = getDestinationName(lastPoint);

  const createTripInfoTitle = () => {
    if (sortedPoints.length > 3) {
      return `${firstDestination.name} ... ${lastDestination.name}`;
    }
    if (sortedPoints.length === 3) {
      const middleDestination = getDestinationName(sortedPoints[1]);
      return `&mdash; ${middleDestination.name} &mdash;`;
    }
    if (sortedPoints.length === 2) {
      return `${firstDestination.name} &mdash; ${lastDestination.name}`;
    }
    if (sortedPoints.length === 1) {
      return `${firstDestination.name}`;
    }
  };


  let totalCost = 0;

  points.forEach((point) => {
    totalCost += point.basePrice;

    getOffersById(allOffers, point.type, point.offers)
      .forEach((offer) => {
        totalCost += offer.price;
      });
  });

  return /*html*/`
    <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${createTripInfoTitle()}</h1>

      <p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${endDate}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>
    </section>
  `;
};

export default class TripInfoView extends AbstractView {
  #points = [];
  #allOffers = [];
  #allDestinations = [];

  constructor({ points, allDestinations, allOffers }) {
    super();
    this.#points = points;
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
  }

  get template() {
    return createTripInfoTemplate(this.#points, this.#allDestinations, this.#allOffers);
  }
}
