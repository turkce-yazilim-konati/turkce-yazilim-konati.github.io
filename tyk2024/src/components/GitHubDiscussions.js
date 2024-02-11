import React, { useState, useEffect } from 'react';

const GitHubDiscussions = () => {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageInfo, setPageInfo] = useState({
    endCursor: null,
    hasNextPage: true,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const fetchDiscussions = async (afterCursor = null) => {
    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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', // GitHub token'ınızı buraya ekleyin
        },
        body: JSON.stringify({
          query: `
            query GetDiscussions($owner: String!, $name: String!, $pageSize: Int!, $afterCursor: String) {
              repository(owner: $owner, name: $name) {
                discussions(first: $pageSize, after: $afterCursor) {
                  nodes {
                    title
                    bodyHTML
                    url
                    createdAt
                    category {
                      name
                    }
                    reactions {
                      totalCount
                    }
                    author {
                      login
                    }
                  }
                  pageInfo {
                    endCursor
                    hasNextPage
                  }
                }
              }
            }
          `,
          variables: {
            owner: 'turkce-yazilim-konati',
            name: 'topluluk',
            pageSize: 10,
            afterCursor: afterCursor,
          },
        }),
      });

      const data = await response.json();

      if (response.ok && data.data) {
        setDiscussions(data.data.repository.discussions.nodes);
        setPageInfo({
          endCursor: data.data.repository.discussions.pageInfo.endCursor,
          hasNextPage: data.data.repository.discussions.pageInfo.hasNextPage,
        });
      } else if (data.errors) {
        console.error('GraphQL API Hatası:', data.errors);
        setError(data.errors[0].message || 'Bir hata oluştu.');
      } else {
        console.error('API Hatası:', data);
        setError(data.message || 'Bir hata oluştu.');
      }
    } catch (error) {
      console.error('Beklenmeyen Hata:', error);
      setError('Bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const handleLoadMore = () => {
    if (pageInfo.hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
      fetchDiscussions(pageInfo.endCursor);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      fetchDiscussions(); // İlk sayfaya dönmek için afterCursor kullanılmaz
    }
  };

  const handleNextPage = () => {
    if (pageInfo.hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
      fetchDiscussions(pageInfo.endCursor);
    }
  };

  // if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bozuk: {error}</p>;

  return (
    <div>
      <h1>Tartışmalar</h1>
      <div>
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>Önceki</button>
        )}
        {pageInfo.hasNextPage && (
          <button onClick={handleLoadMore}>Daha Yükle</button>
        )}
        {pageInfo.hasNextPage && (
          <button onClick={handleNextPage}>Sonraki</button>
        )}
      </div>
      <ul className='forum'>
        {discussions.map((discussion, index) => (
          <li key={index}>
            <h1>
            <a href={discussion.url} target="_blank" rel="noopener noreferrer">
              {discussion.title}
            </a></h1>

            <span>| {discussion.author.login} | {discussion.category.name} | {discussion.createdAt} | {discussion.reactions.totalCount} yanıt |</span> 
            {/* <div className='forum-içeriği' dangerouslySetInnerHTML={{ __html: discussion.bodyHTML }}></div> */}
          </li>
        ))}
      </ul>
      <div>
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>Önceki</button>
        )}
        {pageInfo.hasNextPage && (
          <button onClick={handleLoadMore}>Daha Yükle</button>
        )}
        {pageInfo.hasNextPage && (
          <button onClick={handleNextPage}>Sonraki</button>
        )}
      </div>
    </div>
  );
};
export default GitHubDiscussions;
