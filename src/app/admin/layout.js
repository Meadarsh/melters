import AdminNav from './component/AdminNav'
import './pagesStyle.css'

export default function Layout({ children }) {
  return (
    <div className='adminMain'>
      <AdminNav />
      <div className="render-admin">{children}</div>
    </div>
  );
}
