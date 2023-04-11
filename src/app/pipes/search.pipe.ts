import { Pipe, PipeTransform } from '@angular/core';
import { UserModelInterface } from '../models/user.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    userData: UserModelInterface[] | null,
    field: string,
    query: string
  ): UserModelInterface[] {
    const regEx = new RegExp(query, 'i');
    if (userData) {
      if (query === '') {
        return userData;
      } else if (field === 'name') {
        return userData.filter(
          (data: UserModelInterface) =>
            data.name.match(regEx) || data.email.match(regEx)
        );
      } else if (field === 'company') {
        return userData.filter((data: UserModelInterface) =>
          data.company.name.match(regEx)
        );
      } else if (field === 'designation') {
        return userData.filter((data: UserModelInterface) =>
          data.company.designation.match(regEx)
        );
      }
    }
    return [];
  }
}
