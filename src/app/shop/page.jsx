
import Searchf from '@/app/components/Search-f'
import './shopping.css'
import RenderDisp from './renderDisp'
import { Providers } from '../toolkit/providers'
const  ShoppingP =  () => {

  return (
   
    <Providers>
    <div className='MainshopP'>
        <Searchf/> 
          <RenderDisp/>
        </div>
        </Providers>
    
  )
}

export default ShoppingP