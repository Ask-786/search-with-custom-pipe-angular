import { Pipe, PipeTransform } from '@angular/core';
import { UserModelInterface } from '../models/user.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    userData: UserModelInterface[] | null,
    query: [string, string]
  ): UserModelInterface[] {
    const regEx = new RegExp(query[1], 'i');
    if (userData) {
      if (query[1] === '') {
        return userData;
      } else if (query[0] === 'name') {
        return userData.filter(
          (data: UserModelInterface) =>
            data.name.match(regEx) || data.email.match(regEx)
        );
      } else if (query[0] === 'company') {
        return userData.filter((data: UserModelInterface) =>
          data.company.name.match(regEx)
        );
      } else {
        return userData.filter((data: UserModelInterface) =>
          data.company.designation.match(regEx)
        );
      }
    }
    return [];
  }
}
