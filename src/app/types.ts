const baseURL = window.location.origin;

export type FormData = {
    income: number;
    expenses: number;
    desired: number;
};

export type ModalProps = {
  title: string;
  subtitle: string;
  onClose: () => void
  color: string;
};

export const createPost = async (url: string, data: any) => {
  try {
    const response = await fetch(baseURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Post created:', responseData);
  } catch (error: any) {
    console.error('Fetch error:', error.message);
  }
}