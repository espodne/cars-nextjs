export async function fetchCars() {
  const apiKey = process.env.RAPIDAPI_KEY;
  const apiHost = process.env.RAPIDAPI_HOST;

  if (!apiKey || !apiHost) {  
    throw new Error("API key or host is missing");
  }

  const headers = {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": apiHost,
  };


  const responce = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=a4", {
    headers: headers
  }) 

  const result = await responce.json()
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

