import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './component/archive/archive.component';
import { BanchmarkSectionhistoryReportComponent } from './component/banchmark-sectionhistory-report/banchmark-sectionhistory-report.component';
import { BanchmarkTeamhistoryReportComponent } from './component/banchmark-teamhistory-report/banchmark-teamhistory-report.component';
import { BenchmarkEngineerComponent } from './component/benchmark-engineer/benchmark-engineer.component';
import { BenchmarkComponent } from './component/benchmark/benchmark.component';
import { BestReportComponent } from './component/best-report/best-report.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DetailedEngineerReportComponent } from './component/detailed-engineer-report/detailed-engineer-report.component';
import { DetailedReportComponent } from './component/detailed-report/detailed-report.component';
import { DetailedSectionReportComponent } from './component/detailed-section-report/detailed-section-report.component';
import { DetailedShiftReportComponent } from './component/detailed-shift-report/detailed-shift-report.component';
import { DetailedTeamReportComponent } from './component/detailed-team-report/detailed-team-report.component';
import { DistributeEvaluatorComponent } from './component/distribute-evaluator/distribute-evaluator.component';
import { EngineerEvaluationComponent } from './component/engineer-evaluation/engineer-evaluation.component';
import { EngineerIncludeComponent } from './component/engineer-include/engineer-include.component';
import { EngineerStatisticComponent } from './component/engineer-statistic/engineer-statistic.component';
import { EvaluateSampleComponent } from './component/evaluate-sample/evaluate-sample.component';
import { EvaluationComponent } from './component/evaluation/evaluation.component';
import { EvaluatorDailyStatComponent } from './component/evaluator-daily-stat/evaluator-daily-stat.component';
import { EvaluatorMonthStatComponent } from './component/evaluator-month-stat/evaluator-month-stat.component';
import { EvaluatorStatisticsComponent } from './component/evaluator-statistics/evaluator-statistics.component';
import { PendingComponent } from './component/pending/pending.component';
import { ReEvaluateComponent } from './component/re-evaluate/re-evaluate.component';
import { ReEvaluationReportComponent } from './component/re-evaluation-report/re-evaluation-report.component';
import { ResultComponent } from './component/result/result.component';
import { SearchSerialComponent } from './component/search-serial/search-serial.component';
import { SearchUNIIDComponent } from './component/search-uni-id/search-uni-id.component';
import { SearchUniqKeyComponent } from './component/search-uniq-key/search-uniq-key.component';
import { SummaryEngineerReportComponent } from './component/summary-engineer-report/summary-engineer-report.component';
import { SummaryReportComponent } from './component/summary-report/summary-report.component';
import { SummarySectionReportComponent } from './component/summary-section-report/summary-section-report.component';
import { SummaryShiftReportComponent } from './component/summary-shift-report/summary-shift-report.component';
import { SummaryTeamReportComponent } from './component/summary-team-report/summary-team-report.component';
import { TotalEvaluationComponent } from './component/total-evaluation/total-evaluation.component';
import { TrendEngineerReportComponent } from './component/trend-engineer-report/trend-engineer-report.component';
import { TrendReportComponent } from './component/trend-report/trend-report.component';
import { TrendSectionReportComponent } from './component/trend-section-report/trend-section-report.component';
import { TrendShiftReportComponent } from './component/trend-shift-report/trend-shift-report.component';
import { TrendTeamReportComponent } from './component/trend-team-report/trend-team-report.component';
import { ViewPendingComponent } from './component/view-pending/view-pending.component';
import { ViewResultComponent } from './component/view-result/view-result.component';
import { LayoutComponent } from './shared/component/layout/layout.component';
import { LoginComponent } from './shared/component/login/login.component';

const routes: Routes = [
  {
    path:'login',
  component:LoginComponent,
 },
 {
  path: '',
  redirectTo: '/result', // Redirect to result by default
  pathMatch: 'full'
},
  {
    path:'',
    component: LayoutComponent,




    children: [
      {
      path:'',
      component: DashboardComponent,

    },
    {
      path:'result',
      component: ResultComponent,

    },
    {
      path:'viewresult',
      component: ViewResultComponent,

    },
    {
      path:'searchuniqkey',
      component: SearchUniqKeyComponent

    },
    {
      path:'searchserial',
      component: SearchSerialComponent

    },
    {
      path:'searchunid',
      component: SearchUNIIDComponent,

    },
    {
      path:'evaluatorstatistic',
      component: EvaluatorStatisticsComponent,

    },
    {
      path:'evaluate',
      component:EvaluationComponent,

    },
    {
      path:'pending',
      component: PendingComponent,

    },
    {
      path:'viewpending',
      component: ViewPendingComponent,

    },
    {
      path:'revaluatereport',
      component: ReEvaluationReportComponent,

    },
    {
      path:'revaluate',
      component:ReEvaluateComponent,

    },
    {
      path:'sample',
      component:EvaluateSampleComponent,

    },
    {
      path:'engineerinclude',
      component:EngineerIncludeComponent

    },
    {
      path:'distributevaluator',
      component: DistributeEvaluatorComponent,

    },
    {
      path:'engineerevaluation',
      component: EngineerEvaluationComponent,

    },
    {
      path:'engineerstatistic',
      component: EngineerStatisticComponent,

    },
    {
      path:'monthstat',
      component: EvaluatorMonthStatComponent,

    },
    {
      path:'dailystat',
      component: EvaluatorDailyStatComponent,

    },
    {
      path:'total',
      component:TotalEvaluationComponent,

    },
    {
      path:'bestreport',
      component: BestReportComponent,

    },
    {
      path:'benchmark',
      component: BenchmarkComponent,

    },
    {
      path:'benchmarkengineer',
      component: BenchmarkEngineerComponent,

    },
    {
      path:'detailedreport',
      component:DetailedReportComponent,

    },
    {
      path:'trendreport',
      component:TrendReportComponent,

    },
    {
      path:'summaryreport',
      component:SummaryReportComponent,
    },

      {
      path:'archive',
      component: ArchiveComponent,

    },
    {
      path:'detailedsectionreport',
      component: DetailedSectionReportComponent,
    },
    {
      path:'detailedteamreport',
      component:DetailedTeamReportComponent
    },
    {
      path: 'detailedengineereport',
      component: DetailedEngineerReportComponent
    },
    {
      path:'detailedshiftreport',
      component: DetailedShiftReportComponent
    },
    {
      path:'trendsectionreport',
      component: TrendSectionReportComponent,
    },
    {
      path:'trendteamreport',
      component:TrendTeamReportComponent
    },
    {
      path: 'trendengineereport',
      component: TrendEngineerReportComponent
    },
    {
      path:'trendshiftreport',
      component: TrendShiftReportComponent
    },
    {
      path:'summarysectionreport',
      component: SummarySectionReportComponent,
    },
    {
      path:'summaryteamreport',
      component:SummaryTeamReportComponent
    },
    {
      path: 'summaryengineereport',
      component: SummaryEngineerReportComponent
    },
    {
      path:'summaryshiftreport',
      component: SummaryShiftReportComponent
    },
    {
      path: 'sectionhistoryreport',
      component: BanchmarkSectionhistoryReportComponent
    },
    {
      path:'teamhistoryreport',
      component: BanchmarkTeamhistoryReportComponent
    }



    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
