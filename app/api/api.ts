interface Adventure {
  name?: string;
  image: string;
}

export async function getAdventuresdata(): Promise<Adventure[]> {
  try {
    const response = await fetch(process.env.ADVENTURES_API as string);
    if (!response.ok) {
      throw new Error("Response encounterd an error");
    }
    const data = response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

interface Cruise {
  name: string;
  nights: number;
  sailDate: string;
  portNames: string[];
  startPort: string;
  endPort: string;
  price: string;
  shipImage: string;
  shipName: string;
  cruiseLineName: string;
  iconOverlay: string;
  iconBackgroundColor: string;
}

export async function getCruisesdata(): Promise<Cruise[]> {
  try {
    const response = await fetch(process.env.CRUISES_API as string);
    if (!response.ok) {
      throw new Error("Response encounterd an error");
    }
    const data = response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
