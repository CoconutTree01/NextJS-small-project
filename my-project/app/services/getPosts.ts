export const getAllPosts = async () => {
    const response = await fetch('/api/posts', {
        next: { 
            revalidate: 60,             
        },
    });
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
};

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(`api/posts?title_like=${search}`, {
        
    });
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
};
