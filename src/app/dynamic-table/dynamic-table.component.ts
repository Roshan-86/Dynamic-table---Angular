import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  displayedUsers: any[] = [];
  currentPage = 1;
  pageSize = 10; // Display 10 records per page
  sortAscending: boolean = true;
  searchQuery: string = '';

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.results || []; // Use a default empty array if data.results is undefined
      this.filteredUsers = [...this.users]; // Initialize filteredUsers with the full users list
      this.paginate();
    });
  }

  // Pagination function
  paginate(): void {
    if (this.filteredUsers && this.filteredUsers.length) {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.displayedUsers = this.filteredUsers.slice(start, end);
    }
  }

  // Previous page function
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  // Next page function
  nextPage(): void {
    if (this.filteredUsers && this.filteredUsers.length && this.currentPage < this.getMaxPage()) {
      this.currentPage++;
      this.paginate();
    }
  }

  // Calculate the maximum number of pages
  getMaxPage(): number {
    if (this.filteredUsers && this.filteredUsers.length) {
      return Math.ceil(this.filteredUsers.length / this.pageSize);
    }
    return 1; // Default to 1 page if no users
  }

  // Sorting function
  sort(order: 'asc' | 'desc') {
    this.filteredUsers.sort((a, b) => {
      const fullNameA = `${a.name.first} ${a.name.last}`.toLowerCase();
      const fullNameB = `${b.name.first} ${b.name.last}`.toLowerCase();
      
      if (order === 'asc') {
        return fullNameA.localeCompare(fullNameB);
      } else {
        return fullNameB.localeCompare(fullNameA);
      }
    });

    this.paginate(); // Re-paginate after sorting
  }

  // Search function
  search(): void {
    const query = this.searchQuery.toLowerCase().trim();

    // Filter the users based on the search query
    this.filteredUsers = this.users.filter(user => {
      const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
      return fullName.includes(query);
    });

    this.currentPage = 1; // Reset to the first page when searching
    this.paginate(); // Re-paginate after filtering
  }
}
