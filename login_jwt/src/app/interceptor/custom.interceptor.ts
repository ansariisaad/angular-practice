import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('angular token');
  const clonedReq = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })
  return next(clonedReq);
};
