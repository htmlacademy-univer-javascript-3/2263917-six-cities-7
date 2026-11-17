import { CITIES } from '../../const/const';

type CityListProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
};

export const CityList = ({ activeCity, onCityChange }: CityListProps) => (
  <ul className="locations__list tabs__list">
    {Object.keys(CITIES).map((city) => (
      <li className="locations__item" key={city}>
        <a
          className={`locations__item-link tabs__item${
            city === activeCity ? ' tabs__item--active' : ''
          }`}
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            onCityChange(city);
          }}
        >
          <span>{city}</span>
        </a>
      </li>
    ))}
  </ul>
);
