import { Component } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category: any = {};

  constructor(private categoryService: CategoryService, private router: Router) { }


  addCategory() {
    this.categoryService.addCategory(this.category)
      .subscribe(
        response => {
          console.log('Danh mục đã được thêm thành công', response);
          this.router.navigate(['/admin']);
          // Xử lý thông báo thành công hoặc chuyển hướng đến trang danh mục đã thêm
        },
        error => {
          console.error('Lỗi khi thêm danh mục', error);
          // Xử lý thông báo lỗi hoặc chuyển hướng đến trang lỗi
        }
      );
  }
}
