import { normalizeNDF } from "src/app/shared/functions/normalize";

/**
 * 
 * @param options an array of all options
 * @param value filtered value
 * @param filterBy name of filtered atribute
 * @returns an array of values that match the search string value
 */
export function filterOptions<T>(options:T[], value: string = '', filterBy: string = ''): T[] {

    if (!options || options.length === 0) {
      return [];
    }

    if (!value || value.trim() === '') {
      return options.slice();
    }

    const filterValue = normalizeNDF(value.toLowerCase());

    return options
      .filter(option => optionMeetFilterPropertyCriteria<T>(filterValue, option, filterBy));
  }

function optionMeetFilterPropertyCriteria<T>(
    normalizedValue: string, option: T, filterBy: string
  ): boolean {
        const value = option[filterBy];
        return value != null &&
            normalizeNDF(value)
                .toLowerCase()
                .includes(normalizedValue);
  }