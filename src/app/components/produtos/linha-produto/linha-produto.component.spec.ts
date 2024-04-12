import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaProdutoComponent } from './linha-produto.component';

describe('LinhaProdutoComponent', () => {
  let component: LinhaProdutoComponent;
  let fixture: ComponentFixture<LinhaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinhaProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinhaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
