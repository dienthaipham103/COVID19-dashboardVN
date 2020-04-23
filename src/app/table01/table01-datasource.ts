import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ServiceService } from '../service.service';

// TODO: Replace this with your own data model type
export interface Table01Item {
  province: string;
  id: number;
  active: number;
  cases: number;
  deaths: number;
  recovered: number;
  recovered_rate: number;
  death_rate: number;
  active_rate: number
}


/**
 * Data source for the Table01 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class Table01DataSource extends DataSource<Table01Item> {
  data: Table01Item[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(service) {
    super();
    service.getTable_data().subscribe(data => {
      this.data = data;
    })
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Table01Item[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Table01Item[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Table01Item[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'province': return compare(a.province, b.province, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'cases': return compare(+a.cases, +b.cases, !isAsc);
        case 'deaths': return compare(+a.deaths, +b.deaths, !isAsc);
        case 'recovered': return compare(+a.recovered, +b.recovered, !isAsc);
        case 'active': return compare(+a.active, +b.active, !isAsc);
        case 'death_rate': return compare(+a.death_rate, +b.death_rate, !isAsc);
        case 'recovered_rate': return compare(+a.recovered_rate, +b.recovered_rate, !isAsc);
        case 'active_rate': return compare(+a.active_rate, +b.active_rate, !isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
