export const CategoryMap: Record<string, string[]> = {
    hotels: [
        'accommodation.hotel',
        'accommodation.hostel',
        'accommodation.guest_house',
        'accommodation.motel',
        'accommodation.apartment'
    ],

    restaurants: ['catering.restaurant', 'catering.cafe', 'catering.fast_food'],
    attraction: ['tourism.attraction'],
    museum: ['entertainment.museum'],
    zoo: ['entertainment.zoo'],
    temple: [
        'tourism.sights.place_of_worship.church',
        'tourism.sights.place_of_worship.shrine',
        'tourism.sights.place_of_worship.cathedral',
        'tourism.sights.place_of_worship.temple',
        'tourism.sights.place_of_worship.mosque',
        'religion.place_of_worship',
        'religion.place_of_worship.buddhism',
        'religion.place_of_worship.hinduism',
        'religion.place_of_worship.judaism',
        'religion.place_of_worship.sikhism',
        'religion.place_of_worship.christianity',
        'religion.place_of_worship.islam'
    ],
    park: ['leisure.park'],
    monumemt: ['heritage.unesco', 'tourist.sights',]
};

export function normalizeCuisines(cuisines?: string[]) {
    if (!cuisines || cuisines.length === 0) return [];
    return cuisines.map(c => c.trim().toLowerCase()).filter(Boolean);
}

export function isVegetarianFriendly(feature: any): boolean {
    const diet = feature?.properties?.datasource?.raw?.['diet:vegetarian'];
    if (diet && typeof diet === 'string') {
        return ['yes', 'only', 'limited', 'designated'].includes(diet.toLowerCase());
    }

    const cuisines = getCuisinesFromFeatures(feature);
    return cuisines.some(c =>
        ['vegeterian', 'vegan', 'veg'].some(tag => c.includes(tag))
    )
}

export function getCuisinesFromFeatures(feature: any): string[] {
    const raw = feature?.properties?.datasource?.raw;
    let cuisines: string[] = [];
    const fromRaw = raw?.cuisines;
    if(!fromRaw) return cuisines;

    
    if (Array.isArray(fromRaw)) cuisines = fromRaw;
    else if (typeof fromRaw === 'string') cuisines = fromRaw.split(/[;,]/);

    return cuisines.map((c: string) => c.toLowerCase().trim()).filter(Boolean);
}

export function distanceSort(a: any, b: any) {
    const da = a?.properties?.distance || 0;
    const db = b?.properties?.distance || 0;
    return da - db;
}
