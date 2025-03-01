const yourIpV4WirelessLanAdapterAddress = '10.0.2.2:5001';
const personUrl = `http://${yourIpV4WirelessLanAdapterAddress}/api/v1/search/person`;

export const getPersonDetailsByIdAsync = async searchQuery => {
  try {
    const response = await fetch(`${personUrl}/${searchQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch person details');
    }

    return data;
  } catch (error) {
    console.error('Error in getPersonDetailsByIdAsync:', error);
    return {error: error.message};
  }
};
