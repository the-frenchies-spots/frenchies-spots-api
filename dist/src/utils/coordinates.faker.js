"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordinatesFaker = void 0;
function coordinatesFaker(centerLatitude, centerLongitude, maxDistanceInKilometers) {
    const randomAngle = Math.random() * 2 * Math.PI;
    const randomDistance = Math.random() * maxDistanceInKilometers;
    const newLatitude = centerLatitude +
        (randomDistance / 6371) * (180 / Math.PI) * Math.cos(randomAngle);
    const newLongitude = centerLongitude +
        (randomDistance / 6371) * (180 / Math.PI) * Math.sin(randomAngle);
    return {
        type: 'Point',
        coordinates: [newLongitude, newLatitude],
    };
}
exports.coordinatesFaker = coordinatesFaker;
//# sourceMappingURL=coordinates.faker.js.map