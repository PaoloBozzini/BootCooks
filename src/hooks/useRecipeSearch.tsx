import { useEffect, useState } from 'react'
import axios from 'axios'

import api from '../lib/api'
import { RECIPES_PER_LOAD } from '../lib/config'

import { RecipesStateType } from '../types/edamamApiType'
import { EdamamQueryType } from '../types/edamamQueryType'

export default function useRecipeSearch(query:EdamamQueryType, index:number) {
  const [recipes, setRecipes] = useState<RecipesStateType>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setRecipes([])
  }, [query])

  useEffect(() => {

    setLoading(true)
    setError(false)

    let cancel
  
    api.get('/search', {
      params: { ...query, from: index, to: index + RECIPES_PER_LOAD},
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setRecipes(prevRecipes => {
        return [...new Set([...prevRecipes, ...res.data.hits])]
      })
      setLoading(false)
      setHasMore(res.data.more)
    })
    .catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, index])


  return { loading, error, recipes, hasMore }
}