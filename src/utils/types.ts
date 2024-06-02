export type Route = {
  vehicleDetails: {
    type: string;
    model: string;
    color: string;
    licensePlate: string;
    availableSeats: number;
  };
  tripDetails: {
    date: Date;
    departureTime: Date;
    departurePoint: string;
    arrivalTime: Date;
    arrivalPoint: string;
    estimatedTime: number;
    //estimatedTime should be in seconds
  };
  driverName: string;
  driverImageUrl: string;
  price: number;
};
